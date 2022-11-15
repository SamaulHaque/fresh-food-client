import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-3xl font-semibold mt-3'>Difference between SQL and NoSQL</h2>
            <p><b>SQL: </b> SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis. SQL is widely used by top tech companies like Facebook, Whatsapp, etc for data processing solutions. It is used for different types of RDBMS including Oracle, MySQL, SQLServer, etc.</p> <br />
            <p><b>NoSQL: </b> NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.Companies like Twitter and Google, with a tremendous amount of data set like the user data of the social platforms, prefer to use NoSQL over any other RDBMS.  </p>

            <h2 className='text-3xl font-semibold mt-3'>What is JWT, and how does it work?</h2>
            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p><br />
            <p>
            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings: <br />
                 
                1. The header and the payload. <br />
                2. The signature.
            </p>
        </div>
    );
};

export default Blog;