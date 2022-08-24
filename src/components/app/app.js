import React, { Component } from "react"
import { uniqueID } from "../../generator/id-generator"

import AppHeader from "../app-header"
import SearchPanel from "../search-panel"
import PostStatusFilter from "../post-status-filter"
import PostList from "../post-list"
import PostAddForm from "../post-add-form"

import "./app.css"

// import styled from "styled-components";
/* const AppBlock = styled.div`
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    margin: 0 auto;
    max-width: 1024px;
    min-height: 100vh;
    padding: 50px 20px 0;
`;

const SearchPanelWrapper = styled.div`
    display: flex;
    margin: 1rem 0;
`; */

export default class App extends Component {
    // eslint-disable-next-line no-unused-vars
    constructor ( props ) {
        super( props )
        this.state = {
            data: [
                { label: "Going to learn React", important: false, like: false, id: uniqueID() },
                { label: "That is so good", important: false, like: false, id: uniqueID() },
                { label: "I need a break from reality...", important: false, like: false, id: uniqueID() },
            ],
            term: "",
            filter: "all"
        }

        this.deleteItem = this.deleteItem.bind( this )
        this.addItem = this.addItem.bind( this )
        this.onToggleItemProperty = this.onToggleItemProperty.bind( this )
        this.onUpdateSearch = this.onUpdateSearch.bind( this )
        this.onFilterSelect = this.onFilterSelect.bind( this )
    }

    searchPost ( items, term ) {
        if ( term.length === 0 ) {
            return items
        }
        return items.filter( ( item ) => {
            return item.label.indexOf( term ) > -1
        } )
    }

    deleteItem ( id ) {
        this.setState( ( { data } ) => {
            const index = data.findIndex( elem => elem.id === id )
            const newData = [ ...data.slice( 0, index ), ...data.slice( index + 1 ) ]

            return {
                data: newData
            }
        } )
    }

    addItem ( body ) {
        const newItem = {
            label: body,
            important: false,
            id: uniqueID()
        }
        this.setState( ( { data } ) => {
            const newData = [ ...data, newItem ]

            return {
                data: newData
            }
        } )
    }

    onToggleItemProperty ( id, property ) {
        this.setState( ( { data } ) => {
            const index = data.findIndex( elem => elem.id === id )

            const old = data[ index ]
            const newItem = { ...old }
            newItem[ property ] = !old[ property ]
            const before = data.slice( 0, index )
            const after = data.slice( index + 1 )
            const newArr = [ ...before, newItem, ...after ]

            return {
                data: newArr
            }
        } )
    }

    filterPost ( items, filter ) {
        if ( filter === "like" ) {
            return items.filter( item => item.like )
        } else {
            return items
        }
    }

    onUpdateSearch ( term ) {
        this.setState( { term } )
    }

    onFilterSelect ( filter ) {
        this.setState( { filter } )
    }

    render () {

        const { data, term, filter } = this.state
        const liked = data.filter( item => item.like ).length
        const allPosts = data.length

        const visiblePost = this.filterPost( this.searchPost( data, term ), filter )

        return (
            <div className="app">

                <AppHeader
                    liked={ liked }
                    allPosts={ allPosts }
                />

                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={ this.onUpdateSearch }
                    />
                    <PostStatusFilter
                        filter={ filter }
                        onFilterSelect={ this.onFilterSelect }
                    />
                </div>

                <PostList posts={ visiblePost }
                    onDelete={ this.deleteItem }
                    onToggleItemProperty={ this.onToggleItemProperty }
                />

                <PostAddForm onAdd={ this.addItem } />

            </div>
        )
    }
}
