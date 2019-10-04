import React, { Component } from 'react'
import items from './data';
const RoomContext =  React.createContext();
//<RoomContext.Provider value={"Heloo"}></RoomContext.Provider>
class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRoom: [],
        featuredRooms: [],
        loading: true
    };

    //get Data
    componentDidMount() {
        let rooms = this.formateData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);

        this.setState({
            rooms: rooms,
            featuredRooms,
            sortedRoom:rooms,
            loading: false
        });
        
    }

    formateData(items) {
        let tempData =  items.map(item => {
           let id =  item.sys.id;
           let images =  item.fields.images.map(image => image.fields.file.url);
           let room = {...item.fields, images:images, id:id }
           return room;
        })
        return tempData;
    }

    getRoom = slug => {
        let tempRoom = [...this.state.rooms];
        const room = tempRoom.find(room => room.slug === slug);
        return room;
    };


    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom }}>
                {this.props.children}
            </RoomContext.Provider>
            
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext  }
