import React from 'react';

import {
  UserActions,
  Container,
  UserInformationRow,
  UsersContainer,
  UserView,
  Pagination,
  ShadowBox,
} from './styles';
import CustomSnackBar, { CustomSnackBarProps } from '../../CustomSnackBar';
import { useHistory, useLocation } from 'react-router-dom';
import UserServices from '../../service/UserServices';
import User from '../../model/User';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
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
  const [totalPages, setTotalPages] = React.useState(1);

  const getUsersList = () => {
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
        setTotalPages(response.data.total_pages);
      } else {
        setPageError(true);
      }
    });
  };

  React.useEffect(getUsersList, []);
  React.useEffect(getUsersList, [search]);

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
          <h1>This Dashboard project status: Work In Progress ❤ </h1>
          <UsersContainer>
            {usersList.map(userInfo => {
              const { avatar, email, first_name, id, last_name } = userInfo;
              console.log({ Item: userInfo });
              return (
                <UserView key={`${first_name} ${last_name}`}>
                  <img src={avatar} alt={first_name + ' avatar pic.'} />
                  <ShadowBox>
                    <UserInformationRow>
                      <h3>Name: </h3>
                      <h3>{`${first_name} ${last_name}`}</h3>
                    </UserInformationRow>
                    <UserInformationRow>
                      <h3>{`${email}`}</h3>
                    </UserInformationRow>
                  </ShadowBox>
                  <UserActions>
                    <ShadowBox>
                      <DeleteIcon />
                      <span>Delete</span>
                    </ShadowBox>
                    <ShadowBox>
                      <EditIcon />
                      <span>Edit</span>
                    </ShadowBox>
                  </UserActions>
                </UserView>
              );
            })}
          </UsersContainer>
          <Pagination>
            {currentPage !== 1 && (
              <NavigateBeforeIcon
                fontSize={'large'}
                onClick={() => {
                  history.push(`users?page=${currentPage - 1}`);
                }}
              />
            )}
            <h1>
              {currentPage}/{totalPages}
            </h1>
            {currentPage !== totalPages && (
              <NavigateNextIcon
                fontSize={'large'}
                onClick={() => {
                  history.push(`users?page=${currentPage + 1}`);
                }}
              />
            )}
          </Pagination>
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
