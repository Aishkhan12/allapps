import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Button from "components/CustomButtons/Button.js";
import { FaUserPlus, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Modal from "react-modal";
import AddEMP from "./AddEMP";

const useStyles = makeStyles(styles);

export default function Employee(props) {
  const classes = useStyles();
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div>
          <Button
            style={{ float: "right" }}
            onClick={openModal}
            type="button"
            color="success"
          >
            <FaUserPlus />
            Add Employee
          </Button>
          
          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
             <AddEMP close={closeModal} />
            </Modal>
          </div>

        <div style={{ clear: "both" }}></div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <div style={customStyles.divHeader}>
                <h4 className={classes.cardTitleWhite}>All Employees</h4>
              </div>
              <CardBody>
                <Table
                  tableHeaderColor="gray"
                  tableHead={[
                    "ID",
                    "Name",
                    "Father's Name",
                    "Mother's Name",
                    "Date of Birth",
                    "Address",
                    "Contact Number",
                    "Emergency Number",
                    "Education",
                    "Date of Joining",
                    "Salary",
                    "Edit",
                    "Delete",
                  ]}
                  tableData={[
                    [
                      "1",
                      "Mohammad Aish",
                      "Samsher Ali",
                      "Haseena Bano",
                      "15/08/1996",
                      "Manikpur korba",
                      "8120130431",
                      "9630203325",
                      "MCA",
                      "01/03/2021",
                      "4000",
                      <FaRegEdit />,
                      <FaTrashAlt />,
                    ],
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
  divHeader: {
    backgroundColor: "#4CAF50",
    padding: 20,
    borderRadius: 5,
  },
};