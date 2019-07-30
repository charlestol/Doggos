
import { connect } from 'react-redux';
import DogImage from '../components/DogImage';

const mapStateToProps = ({image,isLoading,error}) => ({
    image,
    isLoading,
    error,
});

export default connect(mapStateToProps)(DogImage);
