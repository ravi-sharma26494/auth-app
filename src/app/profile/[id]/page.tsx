import React from 'react';

type ProfileParams = {
    id: string;
};

const UserProfile: React.FC<{ params: ProfileParams }> = ({ params }) => {
    // console.log(typeof params);
    return (
        <>
            <div>User Profile</div>
            <span>{params.id}</span>
        </>
    );
};

export default UserProfile;
