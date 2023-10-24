import { useUser } from "@clerk/nextjs";

export default function Home() {
    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) {
        return null;
    }

    if (isSignedIn) {
        return   <input
            name="user_id"
            id="user_id" 
            value={user.id}
        />;
    }

    return <div>Not signed in</div>;
}
