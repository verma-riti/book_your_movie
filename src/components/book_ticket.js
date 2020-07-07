import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Seats from './seats';


function BookTickets(props) {
	const [box_style, setbox_style] = useState(false);
	const [selectedSeat, setSelectedSeat] = useState([]);
	const silver = "JKLM".split('');
	const gold = "DEFGHI".split('');
	const platinum = "ABC".split('');
	
	const selectSeat = (valueA,valueB)=>{
		box_style ?setbox_style(false): setbox_style(true);
		const seat = valueA + (parseInt(valueB)+1);
		setSelectedSeat(selectedSeat => [...selectedSeat, seat])
		console.log(seat);
	}

	const renderSquare = (alpha, i) =>{
		const seat_num = alpha + parseInt(i+1)
		return(
			<Seats className="ticket-box" value={seat_num} 
					onClick={()=> props.onClick(seat_num)}/>
		)
	}

	return(
		<div className="mt75">
			<Container>
				<h1 className="mb30">Select Your Seat</h1>
				<div className="platinum">
					<h3 className="mb30">Platinum - RS.360</h3>
					{platinum.map((alpha, i) => (
						<Row className="mt10 mb10" key={i}>
							{Array.apply(null, { length: 12 }).map((e, j) => (
								<Col md={1} className="mt10 mb10" onClick={() => selectSeat(alpha,j)} key={j} >
									{renderSquare(alpha, j)}
								</Col>
							))}	   
						</Row>
					))}
				</div>
				<div className="gold">
					<h3 className="mb30">Gold - RS.280</h3>
					{gold.map((alpha, i) => (
						<Row className="mt10 mb10" key={i}>
							{Array.apply(null, { length: 12 }).map((e, j) => (
								<Col md={1} className="mt10 mb10" onClick={() => selectSeat(alpha,j)} key={j} >
									{renderSquare(alpha, j)}
								</Col>
							))}	   
						</Row>
					))}
				</div>
				<div className="silver">
					<h3 className="mb30">Silver - RS.160</h3>
					{silver.map((alpha, i) => (
						<Row className="mt10 mb10" key={i}>
							{Array.apply(null, { length: 12 }).map((e, j) => (
								<Col md={1} className="mt10 mb10" onClick={() => selectSeat(alpha,j)} key={j} >
									{renderSquare(alpha, j)}
								</Col>
							))}	   
						</Row>
					))}
				</div>
			</Container>
		</div>
	)

}

export default BookTickets;