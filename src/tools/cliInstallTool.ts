import { generalOrganizationMistakes, generalRepositoryMistakes } from '../rules.js';
import { CodacyTool, repositorySchema, toolNames } from '../schemas.js';

const rules = `
  Common use cases: 
  - When the user tried to use Codacy CLI and it is not installed

  Common mistakes: 
  ${generalOrganizationMistakes}
  ${generalRepositoryMistakes}
`;
const optionalRepositorySchema = JSON.parse(JSON.stringify(repositorySchema));
optionalRepositorySchema.provider.description = `Optional. ${repositorySchema.provider.description}`;
optionalRepositorySchema.organization.description = `Optional. ${repositorySchema.organization.description}`;
optionalRepositorySchema.repository.description = `Optional. ${repositorySchema.repository.description}`;

export const cliInstallTool: CodacyTool = {
  name: toolNames.CODACY_CLI_INSTALL,
  description: `Install the Codacy CLI used for local analysis. \n ${rules}`,
  inputSchema: {
    type: 'object',
    properties: {
      ...optionalRepositorySchema,
    },
  },
};
