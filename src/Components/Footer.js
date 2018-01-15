import React from 'react';
import LinkContainer from '../Containers/LinkContainer'
import Link from './Link'
const Footer = () => (
        <div>
        <LinkContainer filter={'SHOW_ALL'}>
                All
        </LinkContainer>
        <LinkContainer filter={'SHOW_COMPLETED'}>
                Done
        </LinkContainer>
        <LinkContainer filter={'SHOW_INCOMPLETED'}>
                Not Done
        </LinkContainer>
        
        </div>
    )

export default Footer