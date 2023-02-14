const UserData = ({ users }) => {
  return (
    <>
      {
      users.map((currentUser) => {
        const { id, name, username, email } = currentUser;
        const { street, city, zipcode } = currentUser.address;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            {/* <td>{username}</td> */}
            <td>{email}</td>
            <td>
              {street}, {city} , {zipcode}
            </td>
          </tr>
        );
      })
      }
    </>
  );
};
export default UserData;
