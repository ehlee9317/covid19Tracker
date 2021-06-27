import React from 'react'
import "./InfoBox.css"
import { Card, CardContent, Typography} from "@material-ui/core"

function InfoBox({title, cases, total, ...props}) {
  return (
    <Card onClick={props.onClick} className="infoBox">
      <CardContent>
        {/* Title - Coronavirus Cases*/}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* Number of Cases*/}
        <h2 className="infoBox__cases">
          {cases}
        </h2>

        {/* 1.2M Total*/}
        <Typography className="infoBox__total" color="textSecondary">
          {total} total
        </Typography>

      </CardContent>
    </Card>
  )
}

export default InfoBox

