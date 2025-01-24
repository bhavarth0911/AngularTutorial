import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributedirectiveComponent } from './components/directive/attributedirective/attributedirective.component';
import { StructuredirectiveComponent } from './components/directive/structuredirective/structuredirective.component';
import { IfElseComponent } from './components/controlFlow/if-else/if-else.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { SwitchComponent } from './components/controlFlow/switch/switch.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

export const routes: Routes = [
    {
        path: 'add-employee',
        component:AddEmployeeComponent
    },
    {
        path:'data-bind',
        component:DataBindingComponent
    },
    {
        path:'attribute-dir',
        component:AttributedirectiveComponent
    },
    {
        path:'structure-dir',
        component:StructuredirectiveComponent
    },
    {
        path:'if-else',
        component:IfElseComponent
    },
    {
        path:'for',
        component:ForComponent
    },
    {
        path:'switch',
        component:SwitchComponent
    },
    {
        path:'pipe',
        component:PipeComponent
    },
    {
        path:'template-form',
        component:TemplateFormComponent
    }

];
