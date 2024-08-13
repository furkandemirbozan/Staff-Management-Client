import React from 'react'
import HomePageLayoutHeaderComponent from '../components/HomePageLayoutComponent/HomePageLayoutHeaderComponent'
import HomePageLayoutHeroComponent from '../components/HomePageLayoutComponent/HomePageLayoutHeroComponent'
import HomePageLayoutFooterComponent from '../components/HomePageLayoutComponent/HomePageLayoutFooterComponent'

function HomePage() {
    return (
        <div>
            <HomePageLayoutHeaderComponent />
            <HomePageLayoutHeroComponent />
            <HomePageLayoutFooterComponent />
        </div>
    )
}

export default HomePage