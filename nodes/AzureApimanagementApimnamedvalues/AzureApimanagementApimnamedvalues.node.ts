import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimnamedvalues implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimnamedvalues',
                name: 'N8nDevAzureApimanagementApimnamedvalues',
                icon: { light: 'file:./azure-apimanagement-apimnamedvalues.png', dark: 'file:./azure-apimanagement-apimnamedvalues.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Use REST APIs to manage NamedValue entities in Azure API Management deployments.',
                defaults: { name: 'Azure Apimanagement Apimnamedvalues' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimnamedvaluesApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
