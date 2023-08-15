const Blogs = () => {
    return (
        <div className="md:w-8/12 mx-auto">
            <h1 className='text-4xl text-center font-bold'>Blog</h1>
            <div className="my-8 shadow-lg p-8">
                <h2 className="text-3xl font-bold text-red-600">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <div className="my-8">
                    <h3 className="text-2xl font-bold">Access Token:</h3>
                    <ul>
                        <li>Short-lived credential for accessing specific resources.</li>
                        <li>Used to authenticate requests without sending credentials every time.</li>
                    </ul>

                </div>
                <div className="my-8">
                    <h3 className="text-2xl font-bold">Refresh Token:</h3>
                    <ul>
                        <li>Long-lived credential to obtain new access tokens.</li>
                        <li>Used to refresh an expired access token without re-entering credentials.</li>
                    </ul>
                </div>
                <div className="my-8">
                    <h3 className="text-2xl font-bold">Storage on Client-Side:</h3>
                    <ul>
                        <li>Access Tokens: Store in memory or use secure cookies (avoid local storage).</li>
                        <li>Refresh Tokens: Store in secure HTTP-only and secure cookies for added security.</li>
                    </ul>
                </div>
            </div>

            {/* Blog2 */}
            <div className="my-8 shadow-lg p-8">
                <h2 className="text-3xl font-bold text-red-600">2. Compare SQL and NoSQL databases?</h2>
                <div className="my-8">
                    <h3 className="text-2xl font-bold">SQL (Relational):
                    </h3>
                    <ul>
                        <li>Structured data in tables.</li>
                        <li>Fixed schema.</li>
                        <li>Powerful querying with SQL.</li>
                        <li>ACID-compliant transactions.</li>
                        <li>Good for structured and complex data.</li>
                    </ul>

                </div>
                <div className="my-8">
                    <h3 className="text-2xl font-bold">NoSQL (Non-Relational):</h3>
                    <ul>
                        <li>Diverse data models.</li>
                        <li>Flexible or schema-less.</li>
                        <li>Varied query languages.</li>
                        <li>Variable ACID compliance.</li>
                        <li>Ideal for scalability and unstructured data.</li>
                    </ul>
                </div>
            </div>
            {/* Blog 3 */}
            <div className="my-8 shadow-lg p-8">
                <h2 className="text-3xl font-bold text-red-600">3. What is express js? What is Nest JS?</h2>
                <div className="my-8">
                    <h3 className="text-2xl font-bold">Express.js:
                    </h3>
                    <ul>
                        <li>Minimalist web framework for Node.js.</li>
                        <li>Simplifies web application development.</li>
                        <li>Known for flexibility and simplicity.</li>
                        <li>Often used for building APIs and SPAs.</li>
                    </ul>

                </div>
                <div className="my-8">
                    <h3 className="text-2xl font-bold">Nest.js:</h3>
                    <ul>
                        <li>Progressive Node.js framework.</li>
                        <li>Focuses on maintainable and scalable apps.</li>
                        <li>Incorporates OOP and FP concepts.</li>
                        <li>Built on Express.js, provides strong architecture.</li>
                    </ul>
                </div>
            </div>
            {/* Blog 4 */}
            <div className="my-8 shadow-lg p-8">
                <h2 className="text-3xl font-bold text-red-600">4. What is MongoDB aggregate and how does it work?</h2>
                <div className="my-8">
                    <h3 className="text-2xl font-bold">MongoDB Aggregation:
                    </h3>
                    <ul>
                        <li>Aggregation is a framework for processing and transforming data in MongoDB.</li>
                        <li>It uses a pipeline of stages, each with specific operations.</li>
                        <li>Data flows through stages, where it's filtered, grouped, transformed, and more.</li>
                        <li>Aggregation is used for complex data analysis and manipulation within the database.</li>
                        <li>Allows you to perform tasks like filtering, grouping, sorting, and calculating aggregates in one query-like operation.</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Blogs;