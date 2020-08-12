import React from 'react';


export const AppContext = React.createContext()


export default class AppContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: "photos",
            query: ""
        }
    }

    switchPage = () => {
        this.setState({
            page: this.state.page === "homePage" ? "photos" : "homePage",
        })
    }

    handleSearch = query => {
        this.setState({
            page: "photos",
            query
        })
    }

    render() {
        const { page, query } = this.state
        const value = { page, query, switchPage: this.switchPage, handleSearch: this.handleSearch }
        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}