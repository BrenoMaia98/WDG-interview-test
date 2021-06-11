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
import CustomSnackBar, {
  CustomSnackBarProps,
} from '../../components/CustomSnackBar';
import { useHistory, useLocation } from 'react-router-dom';
import UserServices from '../../service/UserServices';
import User from '../../model/User';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Loading from '../../components/Loading';
type UsersQueryParams = {
  page?: number;
};

const UsersList: React.FC<UsersQueryParams> = ({ page }) => {
  const history = useHistory();
  const service = { user: new UserServices() };
  let { search } = useLocation();
  const [usersList, setUsersList] = React.useState<User[]>([]);
  const [pageError, setPageError] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const getUsersList = () => {
    const query = new URLSearchParams(search);
    const page = query.get('page');
    let reqPageNumber = currentPage;
    if (page && !isNaN(parseInt(page))) {
      setCurrentPage(parseInt(page));
      reqPageNumber = parseInt(page);
    }
    setLoading(true);
    service.user
      .getUserListFromPage(reqPageNumber)
      .then(response => {
        if (response.status === 200) {
          setUsersList(response.data.data);
          setTotalPages(response.data.total_pages);
        } else {
          setPageError(true);
        }
      })
      .catch(() =>
        setSnackProps({
          ...snackProps,
          message: 'An unexpected error occurred, please try again!',
          open: true,
        }),
      )
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(getUsersList, []);
  React.useEffect(getUsersList, [search]);

  const handleCloseSnack = () => setSnackProps({ ...snackProps, open: false });
  const [snackProps, setSnackProps] = React.useState<CustomSnackBarProps>({
    autoHideDuration: 3000,
    handleClose: handleCloseSnack,
    message: 'An unexpected error occurred, please try again!',
    open: false,
    status: 'error',
  });

  const goToPage = (param: 'prev' | 'next') => {
    const newPage = param === 'prev' ? currentPage - 1 : currentPage + 1;
    history.push(`users?page=${newPage}`);
  };
  const handleEditUser = (id: number) => {
    history.push(`users/${id}`);
  };
  const handleDeleteUser = (index: number, name: string) => {
    const response = window.confirm(
      `Are you sure you want to delete ${name} from the list?`,
    );

    if (response) {
      setLoading(true);
      service.user
        .deleteUser(usersList[index].id)
        .then(response => {
          console.log({ status: response.status });
          if (response.status === 204) {
            const newArr = usersList;
            console.log('aa');

            setUsersList([
              ...newArr.slice(0, index),
              ...newArr.slice(index + 1),
            ]);
            setSnackProps({
              message: `${name} deleted successfully`,
              open: true,
              status: 'success',
              handleClose: handleCloseSnack,
            });
          }
        })
        .catch(() =>
          setSnackProps({
            ...snackProps,
            message: 'An unexpected error occurred, please try again!',
            open: true,
          }),
        )
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <Container>
      {pageError ? (
        <>
          <h1> Work In Progress ❤ </h1>
          <UsersContainer>
            {usersList.map((userInfo, index) => {
              const { avatar, email, first_name, id, last_name } = userInfo;
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
                    <ShadowBox
                      onClick={() =>
                        handleDeleteUser(index, ` ${first_name} ${last_name}`)
                      }
                    >
                      <DeleteIcon />
                      <span>Delete</span>
                    </ShadowBox>
                    <ShadowBox onClick={() => handleEditUser(userInfo.id)}>
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
                  goToPage('prev');
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
                  goToPage('next');
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

      <Loading loading={loading} />
      <CustomSnackBar {...snackProps} />
    </Container>
  );
};

export default UsersList;
