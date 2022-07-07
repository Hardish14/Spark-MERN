import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened = {modalOpened}
      onClose={() =>setModalOpened(false)}
    >
      <form className='infoForm'>
        <h3 style={{"color":"#0d0d4c"}}>Your Info</h3>

        <div>
          <input type="text" className='infoInput' name='FirstName' placeholder='First Name' />
          <input type="text" className='infoInput' name='LastName' placeholder='Last Name' />
        </div>
        <div>
          <input type="text" className='infoInput' name='Profile' placeholder='Profile Name'/>
        </div>
        <div>
          <input type="text" className='infoInput' name='LivesIn' placeholder='Lives In' />
          <input type='text' className='infoInput' name='MobileNumber' placeholder='MobileNumber' />
        </div>
        <div>
          Profile image
          <input type="file" name='profileImg' />
          Cover Image
          <input type='file' name='coverImg' />
        </div>
      </form>
    </Modal>
  );
}
export default ProfileModal 