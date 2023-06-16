const DBConnection = require("../db/db-connection");
const Tables = require("../config/tables");
const { multipleColumnSet } = require("../utils/common.utils");

/***********************************User Model***************************************/
const getList = async () => {
  const sql = `SELECT * FROM ${Tables.TB_post}`;
  const result = await DBConnection.query(sql, []);
  if (result.length === 0) {
    return {
      state: false,
      posts: [],
    };
  }
  return {
    state: true,
    posts: result,
  };
};

const addPost = async (params) => {
  try {
    const sql = `INSERT INTO ${Tables.TB_post} (title, company, client, state) VALUES (?,?,?,?)`;
    const result = await DBConnection.query(sql, [
      params.title,
      params.company,
      params.client,
      "Draft",
    ]);

    if (result.affectedRows === 0) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

const updatePostByCopyrigher = async (params) => {
  try {
    if (params.mode == 0) {
      const sql = `UPDATE ${Tables.TB_post} SET title = ?, post = ?, hashtags = ?, comments = ?, notes = ? WHERE id = ?`;

      const result = await DBConnection.query(sql, [
        params.title,
        params.post,
        params.hashtags,
        params.comments,
        params.notes,
        params.id,
      ]);

      if (result.affectedRows === 0) {
        return false;
      } else {
        return true;
      }
    } else {
      const sql = `UPDATE ${Tables.TB_post} SET title = ?, post = ?, hashtags = ?, comments = ?, notes = ?, state = ? WHERE id = ?`;

      const result = await DBConnection.query(sql, [
        params.title,
        params.post,
        params.hashtags,
        params.comments,
        params.notes,
        "Approved",
        params.id,
      ]);

      if (result.affectedRows === 0) {
        return false;
      } else {
        return true;
      }
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

const updatePostByCustomer = async (params) => {
  try {
    if (params.mode == 0) {
      const sql = `UPDATE ${Tables.TB_post} SET title = ?, post = ?, hashtags = ?, comments = ?, notes = ?, schedule = ? WHERE id = ?`;

      const result = await DBConnection.query(sql, [
        params.title,
        params.post,
        params.hashtags,
        params.comments,
        params.notes,
        params.schedule,
        params.id,
      ]);

      if (result.affectedRows === 0) {
        return false;
      } else {
        return true;
      }
    } else {
      const sql = `UPDATE ${Tables.TB_post} SET title = ?, post = ?, hashtags = ?, comments = ?, notes = ?, schedule = ?, state = ? WHERE id = ?`;

      const result = await DBConnection.query(sql, [
        params.title,
        params.post,
        params.hashtags,
        params.comments,
        params.notes,
        params.schedule,
        "Scheduled",
        params.id,
      ]);

      if (result.affectedRows === 0) {
        return false;
      } else {
        return true;
      }
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

const updatePostByTeammember = async (params) => {
  try {
    if (params.mode == 0) {
      const sql = `UPDATE ${Tables.TB_post} SET title = ?, post = ?, hashtags = ?, comments = ?, notes = ? WHERE id = ?`;

      const result = await DBConnection.query(sql, [
        params.title,
        params.post,
        params.hashtags,
        params.comments,
        params.notes,
        params.id,
      ]);

      if (result.affectedRows === 0) {
        return false;
      } else {
        return true;
      }
    } else {
      const sql = `UPDATE ${Tables.TB_post} SET title = ?, post = ?, hashtags = ?, comments = ?, notes = ?, state = ? WHERE id = ?`;

      const result = await DBConnection.query(sql, [
        params.title,
        params.post,
        params.hashtags,
        params.comments,
        params.notes,
        "Published",
        params.id,
      ]);

      if (result.affectedRows === 0) {
        return false;
      } else {
        return true;
      }
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

/***********************************Export*******************************************/
module.exports = {
  getList,
  addPost,
  updatePostByCopyrigher,
  updatePostByCustomer,
  updatePostByTeammember,
};
