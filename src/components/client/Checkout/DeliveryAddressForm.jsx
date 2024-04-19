import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { axiosInstance } from "../../admin/Utility/axiosApiConfig";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addAddress } from "../../../features/auth/authSlice";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  // const { address } = useSelector((state) => state.auth);
  // console.log(address);
  //   const [address, setAddress] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    await axiosInstance
      .post("http://localhost:8081/api/users/profile/address", address)
      .then((res) => {
        const data = res.data;
        console.log(data);
        toast.success(data.message);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("address", address);
  };

  const fetchData = async () => {
    await axiosInstance
      .get(`http://localhost:8081/api/users/profile/getAddress`, {})
      .then((res) => {
        const data = res.data;
        dispatch(addAddress(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8">
      <Grid
        item
        xs={12}
        lg={5}
        className="border w-full rounded-md shadow-md h-[30rem] overflow-y-scroll"
      >
        <div className="px-5 py-7 border-b cursor-pointer">
          <AddressCard />
        </div>
      </Grid>

      <Grid item xs={12} lg={8}>
        <div className="border rounded-md shadow-md">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} padding={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="firstName"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="lastName"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="given-name"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal Code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  sx={{ mt: 2, bgcolor: "#9155fd" }}
                  size="large"
                  variant="contained"
                  type="submit"
                >
                  Add Adreess
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
