import { connect } from 'react-redux';
import Link from '../Components/Link'
import { updateVisibility } from '../Actions'

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    console.log(state.visibility);

    return {
        active: ownProps.filter === state.visibility

    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    // write it here like this so we can bind ownProps.filter to it.
    // not quite sure about this.
    onClick: () => {
        dispatch(updateVisibility(ownProps.filter))
    }
})

const LinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default LinkContainer