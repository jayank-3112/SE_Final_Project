import { UserButton } from "@clerk/nextjs";

const TestPage = () => {
    return (
        <div>
            <h1>Test Page</h1>
            <UserButton
                afterSignOutUrl="/"
            />
        </div>
    );
}

export default TestPage;