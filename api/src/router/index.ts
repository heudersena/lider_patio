import { Router } from 'express';

import { controlsRouter } from './control.routes';
import { sessionRouter } from './session.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/v1/users', usersRouter);
router.use('/v1/session', sessionRouter);
router.use('/v1/control', controlsRouter);

export { router }
