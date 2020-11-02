import { connect } from '../../util/db';

const sequelize = await connect();

export default async (req, res) => {
  console.log(req.body);

  console.log(sequelize.options);
};
