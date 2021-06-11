import React from 'react';

import { Container } from './styles';
import CustomSnackBar, { CustomSnackBarProps } from '../../CustomSnackBar';
import { useHistory, useLocation } from 'react-router-dom';
import UserServices from '../../service/UserServices';

type UsersQueryParams = {
  page?: number;
};

const Users: React.FC<UsersQueryParams> = ({ page }) => {
  const history = useHistory();
  const service = { user: new UserServices() };
  let { search } = useLocation();
  const [usersList, setUsersList] = React.useState([]);
  const [pageError, setPageError] = React.useState(true);
  React.useEffect(() => {
    const query = new URLSearchParams(search);
    const page = query.get('page');
    console.log({ page });
  }, [search]);

  React.useEffect(() => {
    const query = new URLSearchParams(search);
    const page = query.get('page');
    if (page) {
    }
    console.log({ page });
  }, [search]);

  React.useEffect(() => {
    service.user.getUserListFromPage(1).then(response => {
      if (response.status === 200) {
      } else {
        setPageError(true);
      }
    });
  }, []);
  const handleCloseSnack = () => setSnackProps({ ...snackProps, open: false });
  const [snackProps, setSnackProps] = React.useState<CustomSnackBarProps>({
    autoHideDuration: 6000,
    handleClose: handleCloseSnack,
    message: "HELOOOOOOOO I'M AN ERROR",
    open: false,
    status: 'error',
  });

  return (
    <Container>
      {pageError && (
        <h1>An unexpected error occurred, please refresh the page</h1>
      )}
      <CustomSnackBar {...snackProps} />
    </Container>
  );
};

export default Users;
