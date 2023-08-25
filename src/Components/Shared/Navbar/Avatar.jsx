import avatar from '../../../assets/placeholder.jpg'

const Avatar = () => {
    return (
        <img className='rounded-full' src={avatar} alt="profile" height='30' width='30' />
    );
};

export default Avatar;