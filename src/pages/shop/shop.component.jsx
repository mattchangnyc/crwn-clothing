import React from 'react';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

//import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
//import CollectionPage from '../collection/collection.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.component';

//import { updateCollections } from '../../redux/shop/shop.actions';
//import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
//import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    // constructor() {
    //     super();

    //     this.state = {
    //         loading: true
    //     };
    // }

    // state = {
    //     loading: true
    // };

    

    componentDidMount() {


        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // });

        // const { fetchCollectionsStartAsync } = this.props;
        // fetchCollectionsStartAsync();

        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        //const { match, isCollectionsLoaded } = this.props;
        const { match } = this.props

        return (
            <div className='shop-page'>
                {/*<Route 
                    exact path={`${match.path}`} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={ isCollectionFetching } {...props} />} 
                />*/}
                <Route 
                    exact path={`${match.path}`} 
                    component={CollectionsOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}
                />
                {/*<Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionPageWithSpinner isLoading={ !isCollectionsLoaded } {...props} />}
                />*/}
            </div>
        )
    }
} 


// const mapStateToProps = createStructuredSelector({
//     isCollectionsLoaded: selectIsCollectionsLoaded
// });

const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

//export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
export default connect(null, mapDispatchToProps)(ShopPage);