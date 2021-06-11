import React from 'react';

import {
  Container,
  UserProfileImg,
  Label,
  Name,
  UserContainer,
} from './styles';
import CustomSnackBar, {
  CustomSnackBarProps,
} from '../../components/CustomSnackBar';
import { useHistory, useParams } from 'react-router-dom';
import UserServices from '../../service/UserServices';

import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button';

import { RouteComponentProps, withRouter } from 'react-router';
import User from '../../model/User';
import Loading from '../../components/Loading';

const UserEdit = () => {
  const history = useHistory();
  const service = { user: new UserServices() };
  let { id } = useParams<{ id: string }>();
  const [userInitialInfo, setuserInitialInfo] = React.useState<User>(
    {} as User,
  );

  const [loading, setLoading] = React.useState(false);
  const [job, setJob] = React.useState('');

  const handleCloseSnack = () => setSnackProps({ ...snackProps, open: false });
  const [snackProps, setSnackProps] = React.useState<CustomSnackBarProps>({
    autoHideDuration: 3000,
    handleClose: handleCloseSnack,
    message: 'An unexpected error occurred, please try again!',
    open: false,
    status: 'error',
  });

  const handleSubmit = () => {
    if (!job) {
      setSnackProps({
        handleClose: handleCloseSnack,
        message: 'You must inform the role!',
        open: true,
        status: 'info',
      });
    } else {
      if (id && !isNaN(parseInt(id))) {
        setLoading(true);
        service.user
          .editUser(parseInt(id), {
            name: `${userInitialInfo.first_name} ${userInitialInfo.last_name}`,
            job,
          })
          .then(response => {
            if (response.status === 200) {
              setSnackProps({
                handleClose: handleCloseSnack,
                message: 'User information updated successfully!',
                open: true,
                status: 'success',
              });
            } else {
              setSnackProps({
                ...snackProps,
                message: 'An unexpected error occurred, please try again!',
                open: true,
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
    }
  };

  React.useEffect(() => {
    if (id && !isNaN(parseInt(id))) {
      setLoading(true);
      service.user
        .getUserInfo(parseInt(id))
        .then(response => {
          if (response.status === 200) {
            setuserInitialInfo(response.data.data);
          } else {
            setSnackProps({
              ...snackProps,
              open: true,
            });
          }
        })
        .catch(() =>
          setSnackProps({
            ...snackProps,
            open: true,
          }),
        )
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <Container>
      {JSON.stringify(userInitialInfo) !== '{}' && (
        <UserContainer>
          <UserProfileImg
            src={userInitialInfo.avatar}
            alt={userInitialInfo.first_name + ' avatar pic.'}
          />
          <div>
            <Label>Name: </Label>
            <Name>
              {userInitialInfo.first_name} {userInitialInfo.last_name}
            </Name>
          </div>
          <div>
            <Label>Email:</Label>
            <h3>{userInitialInfo.email}</h3>
          </div>
          <div>
            <Label>
              To complete the user Info, you must provide us with his role on
              the company:
            </Label>
            <TextField
              label="Role :"
              fullWidth
              onChange={text => setJob(text.target.value)}
              value={job}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Save information
            </Button>
          </div>
          <div>
            <Button
              variant="text"
              color="primary"
              fullWidth
              onClick={() => {
                history.push('/users');
              }}
            >
              Go Back
            </Button>
          </div>
        </UserContainer>
      )}

      <Loading loading={loading} />
      <CustomSnackBar {...snackProps} />
    </Container>
  );
};

export default withRouter(UserEdit);
