import { getSource, Mode } from  '../db/source.controller';

export const checkIsAllowed = async (req, res, next) => {
  try {
    const source = await getSource(Mode.REST);
    //add authentication/authorization mechanism
    if (false) res.status(403).json({ message: 'Access denied' });
    next();
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
}; 