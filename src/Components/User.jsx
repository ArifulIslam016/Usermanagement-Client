import React, { use } from 'react';

const User = ({userPromise}) => {
    const users=use(userPromise)
    return (
        <div>
            {
                users.map(user=>{
                    return<div key={user.id}>
                    <h6 >{user.name}</h6>
                        <p>{user.email}</p>
                    </div>
                })
            }
        </div>
    );
};

export default User;