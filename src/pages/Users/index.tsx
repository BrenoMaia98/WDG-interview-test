import React from 'react';

import { Container, Information, UsersContainer, UserView } from './styles';
import CustomSnackBar, { CustomSnackBarProps } from '../../CustomSnackBar';
import { useHistory, useLocation } from 'react-router-dom';
import UserServices from '../../service/UserServices';
import User from '../../model/User';

type UsersQueryParams = {
  page?: number;
};

const Users: React.FC<UsersQueryParams> = ({ page }) => {
  const history = useHistory();
  const service = { user: new UserServices() };
  let { search } = useLocation();
  const [usersList, setUsersList] = React.useState<User[]>([]);
  const [pageError, setPageError] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  React.useEffect(() => {
    const query = new URLSearchParams(search);
    const page = query.get('page');
    if (page && !isNaN(parseInt(page))) {
      setCurrentPage(parseInt(page));
    }
    console.log({ page });
  }, [search]);

  React.useEffect(() => {
    const query = new URLSearchParams(search);
    const page = query.get('page');
    let reqPageNumber = currentPage;
    if (page && !isNaN(parseInt(page))) {
      setCurrentPage(parseInt(page));
      reqPageNumber = parseInt(page);
    }
    service.user.getUserListFromPage(reqPageNumber).then(response => {
      if (response.status === 200) {
        console.log({ response });
        setUsersList(response.data.data);
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
      {pageError ? (
        <>
          <h1>This Dashboard project status: Work In Progress () </h1>
          <UsersContainer>
            {usersList.map(userInfo => {
              const { avatar, email, first_name, id, last_name } = userInfo;
              console.log({ Item: userInfo });
              return (
                <UserView key={`${first_name} ${last_name}`}>
                  <img src={avatar} alt={first_name + ' avatar pic.'} />
                  <Information>
                    <h3>Name: </h3>
                    <h3>{`${first_name} ${last_name}`}</h3>
                  </Information>
                  <Information>
                    <h3>{`${email}`}</h3>
                  </Information>
                </UserView>
              );
            })}
          </UsersContainer>
        </>
      ) : (
        <h1 style={{ marginTop: 'auto', textAlign: 'center' }}>
          An unexpected error occurred, please refresh the page
        </h1>
      )}

      <CustomSnackBar {...snackProps} />
    </Container>
  );
};

export default Users;
