/* eslint-disable react/prop-types */
import React from "react"

import "./post-list-item.scss"

export default class PostListItem extends React.Component {

    render () {
        const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props // TODO fix eslint prop-types

        let classNames = "app-list-item d-flex justify-content-between"

        if ( important ) {
            classNames += " important"
        }

        if ( like ) {
            classNames += " like"
        }

        return (
            <div className={ classNames }>
                <span
                    className="app-list-item-label w-100"
                    title='To like'
                    onClick={ onToggleLiked }
                >
                    { label }
                </span>

                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={ onToggleImportant }
                    >
                        <i className="fa fa-star"></i>
                    </button>

                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={ onDelete }
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>

                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
