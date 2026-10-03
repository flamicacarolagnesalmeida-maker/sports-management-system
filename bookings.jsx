import { useEffect, useState } from "react";

function Bookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/bookings")
            .then(response => response.json())
            .then(data => {
                setBookings(data);
            });

    }, []);

    return (
        <div>

            <h2>Current Bookings</h2>

            {bookings.map((booking) => (

                <div key={booking.id}>

                    <p>
                        <strong>Booking ID:</strong> {booking.id}
                    </p>

                    <p>
                        <strong>Student:</strong> {booking.student_name}
                    </p>

                    <p>
                        <strong>Equipment ID:</strong> {booking.equipment_id}
                    </p>

                    <p>
                        <strong>Date:</strong> {booking.booking_date}
                    </p>

                    <p>
                        <strong>Status:</strong> {booking.status}
                    </p>

                    <hr />

                </div>

            ))}

        </div>
    );
}

export default Bookings;