"use client";

import { Session } from "next-auth";

interface EventsComponentProps {
    session: Session | null,
}

const EventsComponent = ({session}: EventsComponentProps) => {
    console.log(session);
    return ( 
        <div>{session?.user.name}--{session?.user.role}</div>
     );
};

export default EventsComponent;