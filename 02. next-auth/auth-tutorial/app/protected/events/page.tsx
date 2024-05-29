import { auth } from "@/auth";
import EventsComponent from "@/components/events-component";

const EventsPage = async () => {
    const session = await auth();
    console.log(session)
    return (
        <>
        <EventsComponent session={session} />
        </>
    );
}
 
export default EventsPage;