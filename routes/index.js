const express = require('express');
const axios = require('axios');
const { isHex, decToHex } = require('../src/utils');

const router = express.Router();
const baseUrl = process.env.BASE_URL || 'https://cloudflare-eth.com';

const getBlock = async value => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    jsonrpc: '2.0',
    method: 'eth_getBlockByNumber',
    params: [`${value}`, true],
    id: 1,
  };

  try {
    const { data } = await axios.post(`${baseUrl}`, config);
    return data;
  } catch (err) {
    console.log('getBlock ' + err);
    return err;
  }
};

router.get('*', async (req, res) => {
  let { path } = req;

  path = path.slice(1);

  let data = null;

  if (path === 'latest') {
    data = await getBlock(path);
    return res.status(200).json(data);
  } else if (Number.isNaN(path)) {
    return res.status(400).json({ message: 'incorrect value type' });
  }
  path = decToHex(parseInt(path));

  try {
    data = await getBlock(path);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(400).send(error.message);
  }
});
module.exports = router;
