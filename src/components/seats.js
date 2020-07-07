import React, {useState} from 'react';


function Seats(props){
	const [isSelected, setIsSelected] = useState(null);
	const [selectedSeat, setselectedSeat] = useState([]);
	const addSeats =(seat_num) =>{
		isSelected ? setIsSelected(false): setIsSelected(true);
		selectedSeat.push(seat_num);
		
	}


		return(
			<div className="ticket-box"
				onClick={()=> addSeats(props.value)} style={isSelected ? {background:'DodgerBlue'} : {background:'#b8cdce'}}
			>{props.value}</div>
		)
	
}

export default Seats;