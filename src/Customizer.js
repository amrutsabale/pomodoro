import React, { createContext, useState } from "react";
import Button from "@material-ui/core/Button";
import LaptopChromebookOutlinedIcon from "@material-ui/icons/LaptopChromebook";
import FreeBreakfastOutlinedIcon from "@material-ui/icons/FreeBreakfast";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Grid } from "@material-ui/core";

export const breakContext = createContext();
export const workContext = createContext();
export const longBreakContext = createContext();

function Customizer(props) {
  const [breakLength, setBreakLength] = useState(5);
  const [workLength, setWorkLength] = useState(25);

  return (
    <>
      <workContext.Provider value={workLength}>
        <breakContext.Provider value={breakLength}>
          {props.children}
        </breakContext.Provider>
      </workContext.Provider>
      <div className="flex flex-col sm:justify-evenly sm:flex-row sm:space-y-0 mt-6 space-y-10  text-lg text-secondary">
        <div>
          <p>
            <FreeBreakfastOutlinedIcon />
            Break: {breakLength}
          </p>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            startIcon={<RemoveIcon />}
            onClick={() =>
              setBreakLength((prevLength) =>
                prevLength === 0 ? 0 : prevLength - 1
              )
            }
          ></Button>
          <Button
            color="primary"
            variant="contained"
            size="large"
            startIcon={<AddIcon />}
            onClick={() => setBreakLength(breakLength + 1)}
          ></Button>
        </div>
        <div>
          <p>
            <LaptopChromebookOutlinedIcon />
            Work: {workLength}
          </p>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            startIcon={<RemoveIcon />}
            onClick={() =>
              setWorkLength((prevLength) =>
                prevLength === 0 ? 0 : prevLength - 1
              )
            }
          ></Button>
          <Button
            color="primary"
            variant="contained"
            size="large"
            startIcon={<AddIcon />}
            onClick={() => setWorkLength(workLength + 1)}
          ></Button>
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={() => setWorkLength(30)}
              >
                30 Min
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={() => setWorkLength(45)}
              >
                45 Min
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default Customizer;
