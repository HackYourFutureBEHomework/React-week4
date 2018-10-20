import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addMovies } from '../actions'
import { ListGroup, ListGroupItem, Badge, Label } from 'react-bootstrap'

import movieList from '../data/movielist.json'
import genres from '../data/genrelist.json'

const getGenre = id => genres.genres.find(genre => genre.id === id)

class MovieList extends Component  {
    componentDidMount () {
        this.props.loadMovies(movieList.results)
    }
    render () {
        const filterGenreIds = this.props.filterGenres.map(genre => genre.value)

        const movies = this.props.movies.filter(movie => {
            const movieGenreIds = movie.genre_ids
            const filteredIdList = movieGenreIds.filter(id => filterGenreIds.includes(id))
            return filteredIdList.length === filterGenreIds.length || filterGenreIds.length === 0
        })

        const movieList = movies.map(movie => {
            const genres = movie.genre_ids.map(genreId => {
                const style = (filterGenreIds.includes(genreId))? "primary":"default"
                return (
                    <Fragment key={genreId}>
                        <Label bsStyle={style}>
                            {getGenre(genreId).name}
                        </Label>
                        {'  '}
                    </Fragment>
                    
                )
            })
            const MovieTitle = <h2>
                {movie.title}{' '}  
                <Badge style={{backgroundColor: '#f5ba0e'}}>
                    {movie.vote_average}
                </Badge>
            </h2>
            
            return (
                <ListGroupItem key={movie.id} header={MovieTitle}>
                    {movie.overview}<br />
                    {genres}
                </ListGroupItem>
            )
        })

        return (
            <div>
                <h2>Movies <Badge>{movies.length}/{this.props.movies.length}</Badge></h2>
                <ListGroup>
                    {movieList}
                </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    filterGenres: state.filter.genres
})

const mapDispatchToProps = dispatch => ({
    loadMovies: (moviesArray) => dispatch (addMovies(moviesArray))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList)