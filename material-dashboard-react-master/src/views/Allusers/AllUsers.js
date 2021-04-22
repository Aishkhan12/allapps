import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { FaBan, FaTrashAlt } from "react-icons/fa";

const useStyles = makeStyles(styles);
export default function AllUsers(prop) {
  const classes = useStyles();
  return (
    <div>
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>All User</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Email", "Contact Number", "Block","Delete"]}
                tableData={[
                    ["1", "Mohammad Aish", "mdaish80@gmail.com","8120130431",<FaBan color='red' />,<FaTrashAlt color='blue' /> ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
