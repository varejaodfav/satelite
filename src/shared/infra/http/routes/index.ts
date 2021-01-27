import { Router } from 'express';

// Classe de erro global
import GlobalException from '@shared/errors/GlobalException';

// Middlewares
import authorization from '@modules/users/infra/http/middlewares/authorization';

// Arquivos de rotas da API
import usersRouter from '@modules-infra-http-routes/users.routes';
import locationRouter from '@modules-infra-http-routes/locations.routes';
import divisionsRouter from '@modules-infra-http-routes/divisions.routes';
import departmentsRouter from '@modules-infra-http-routes/departments.routes';
import attachmentsRouter from '@modules-infra-http-routes/attachments.routes';
import subdivisionsRouter from '@modules-infra-http-routes/subdivisions.routes';
import organizationsRouter from '@modules-infra-http-routes/organizations.routes';
import authenticationRouter from '@modules-infra-http-routes/authentication.routes';
import tirsRouter from '@modules/technical_intervention_requests/infra/http/routes/';

const routes = Router();

routes.use('/users/authentication', authenticationRouter);

routes.use(authorization);

routes.use('/tirs', tirsRouter);
routes.use('/users', usersRouter);
routes.use('/locations', locationRouter);
routes.use('/divisions', divisionsRouter);
routes.use('/departments', departmentsRouter);
routes.use('/attachments', attachmentsRouter);
routes.use('/subdivisions', subdivisionsRouter);
routes.use('/organizations', organizationsRouter);

// Dispara um erro caso o cliente tente acessar um recurso indisponível
routes.use(() => {
  throw new GlobalException(
    'GlobalException',
    'NOT_FOUND',
    'Recurso não disponível',
    'Este recurso não está disponível ou não existe.',
    404,
  );
});

export default routes;
