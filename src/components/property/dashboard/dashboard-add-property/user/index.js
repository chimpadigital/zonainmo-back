import { useUser } from "@clerk/nextjs";

export default function Home() {
    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) {
        return null;
    }

    if (isSignedIn) {
        return <div>   <input
            name="user_id"
            id="user_id" 
            value={user.id}
        /></div>;
    }

    return <div>Not signed in</div>;
}
