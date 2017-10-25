import React from 'react';
import ReactDOM from 'react-dom';
import Search from 'react-search';

class SearchBucketlists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buckets: []
        }
        console.log("Search constr")
        this.returnSearch = this.returnSearch.bind(this)
    }

    returnSearch(items) {
        console.log(items);
    }

    getItemsAsync(searchValue, cb) {
        console.log("search taryed", );
        fetch({
            url : "http://localhost:5000/bucketlists/?q={searchValue}",
            method: "GET",
            headers: {'Authorization': ('Bearer ' + sessionStorage.getItem('accessToken'))}
        
        }).then((response) => {
            return response.json();

        }).then( (results) => {
            if(results.items !== undefined) {
                let items = results.items.map( (res, i) => {
                    return {
                        id: i,
                        value: res.title
                    }
                })

                this.setState({ buckets: items });
                cb(searchValue)
            }
        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                swal("Error!", error.response.data.message, "error");
                console.log("Response data", error.response.data);
                console.log("Response status", error.response.status);
                console.log("Response headers", error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log("Request error", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error msg', error.message);
            }
            
            console.log("Error config", error.config);
        });
    }

    render() {
        
        return (
            <div>
                <div>
                    <Search items = {this.state.items}
                        multiple = {true}
                        getItemsAsync = {this.getItemsAsync.bind(this)}
                        onItemsChanged = {this.returnSearch.bind(this)}
                    />
                    
                </div>
            </div>
        );
    }
}

export default SearchBucketlists;