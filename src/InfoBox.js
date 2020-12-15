import React from 'react'
import { Card, CardContent, Typography} from '@material-ui/core';
import "./InfoBox.css"
function InfoBox({title , cases, total}) {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox__title" color="black">{title}</Typography>
                <h2 className="InfoBox__cases"><strong>{cases}</strong></h2>
                <Typography className="infoBox__total" color="textSecondary">{total}</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
