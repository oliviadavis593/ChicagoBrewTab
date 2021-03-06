import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import BrewContext from '../BrewContext';
import '../styles/BrewPage.css';


class BrewPage extends Component {

    handleClick = () => {
        const brews = this.context.brews; 
        const { brew_id } = this.props.match.params; 
        //map through the brews to find a specific brew id 
        const brew = brews.find(brew => brew.id === parseInt(brew_id, 10));

        this.context.addBrew(brew)
        this.props.history.push('/mybrews')
    }

    
    static contextType = BrewContext; 

    render() {
        //display info from specific brew by id 
        const brews = this.context.brews; 
        const { brew_id } = this.props.match.params;
        const brew = brews.find(brew => brew.id.toString() === brew_id.toString()) || {};
        
        //info to populate on the /brew page 
        return(
         <div>
             <div className='navigation'>
                 <Navigation />
             </div>
             <section className='cbt-brew-page__container'>
             <header>
                <h1>{brew.name}</h1>
             </header>
             <div className='cbt-brew-info__container'>
                 <div className='cbt-brew_image'>
                    
                 </div>
                <div className='cbt-brew_phone-number'>
                    <span>
                        Phone:
                        <br />
                    </span>
                   {brew.phone_number}
                </div>
                <div className='cbt-brew_address'>
                    <span>
                        Address:
                        <br />
                    </span>
                   {brew.address}
                </div>
                <div className='cbt-brew_website'>
                   <a href={brew.website} target='blank'>Website</a>
                </div>
                <details closed='true' className='cbt-brew_details'>
                        <summary>
                            Details
                        </summary>
                        {brew.details}
                </details>
             </div>
             <div className='cbt-add-brew-item'>
                    <button 
                    tag={Link}
                    to='/mybrews' 
                    className='cbt-add-button'
                    onClick={this.handleClick}
                    >
                        Add to list
                    </button>
             </div>
         </section>  
         </div> 
        )
    }
}

export default BrewPage; 