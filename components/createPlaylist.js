import style from "../styles/UploadModal.module.css";
import axios from "axios";

const createPlaylist = () => {

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Create New Playlist</div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Title</div>
        <div className={style.inputContainer}>
          <input
            required
            name="title"
            className={style.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className={style.modalButtons}>
        <button
          onClick={() => setShowUploadMusic(false)}
          className={`${style.button} ${style.cancelButton}`}
        >
          Cancel
        </button>
        <button
          type="create"
          onClick={createNewClicked}
          className={`${style.button} ${style.createButton}`}
        >
          Create New
        </button>
      </div>
    </div>
  );
};

export default createPlaylist;
