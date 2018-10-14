import React from 'react';

import { View } from 'react-native'
import { Card } from 'nachos-ui'

const Item = props => {
    const { title, image } = props
    const cardStyle = { margin: 15, width: 280 }
    return (
        <Card
            footerContent={title}
            image={image}
            style={cardStyle}
        />
    );
}

export default Item
