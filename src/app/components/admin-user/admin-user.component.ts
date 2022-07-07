import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Table } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';


@Component({
    selector: 'admin-user-component',
    templateUrl: './admin-user.component.html',
    styleUrls: ['./admin-user.component.css', '../../css/neumorphism.component.css', '../../components/table/table.component.css']
})

export class AdminUserComponent implements OnInit {

    public tdData: any;
    public thData: any;
    public selectElmType: any;
    public clonedTdData: any = {};
    public tbSelectedRows: any;

    public tglAddNewUser: boolean = false;
    public addNewUserForm!: FormGroup;
    public newFormControl: any = {};

    public onValidationError: string = "";
    public onValidationMsg: string = "";

    constructor(private dataService: DataService, private confirmationService: ConfirmationService) { }

    ngOnInit() {

        this.dataService.getMyTableData().subscribe(

            (response) => {

                this.thData = response.tableUser_th
                this.tdData = response.tableUser_td

                for (let i of this.thData) {
                    this.newFormControl[i.field] = new FormControl('', [Validators.required, Validators.minLength(1)])
                }
                this.addNewUserForm = new FormGroup(this.newFormControl);

                let slIndex = 0
                if (this.tdData.length) {

                    for (let i = 0; i < this.tdData.length; i++) {
                        slIndex = i
                        this.tdData[slIndex]["slIndex"] = i;
                    }

                } else {
                    console.log('no items');
                }

            },

            (error) => {
                console.error(error);
            }

        );

    }


    // Table on row CRUD
    onRowEditInit(tdData: any, id: number) {
        this.clonedTdData[tdData.id] = { ...tdData };
    }

    onRowEditSave(tdData: any, index: number) {

        let modifyLastElmActive = (document.getElementById('tr' + index) as HTMLInputElement).getElementsByClassName('ng-invalid')

        if (modifyLastElmActive.length > 0) {
            this.onValidationError = '*All fields must be filled out.'
        } else {

            delete this.clonedTdData[tdData.id];

            console.log('clicked')
        }

    }

    onRowEditCancel(tdData: any, index: number) {

        this.tdData[index] = this.clonedTdData[tdData.id];
        delete this.tdData[tdData.id];

    }

    onRowDeleteRow(id: any) {

        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this user?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.tdData = this.tdData.filter((i: any) => ![id].includes(i.slIndex));
                this.tbSelectedRows = [];
                this.onValidationMsg = 'Record was deleted successfully.'
                setTimeout(() => {
                    this.onValidationMsg = "";
                }, 2000);
            }
        });
    }

    toggleAddNewUser() {
        console.log(this.addNewUserForm);
        this.tglAddNewUser = !this.tglAddNewUser
    }

    saveAddNewUser(table: Table) {

        let value = this.addNewUserForm.value;

        this.addNewUserForm.reset();

        this.onValidationMsg = 'New record was added successfully.'
        setTimeout(() => {
            this.onValidationMsg = "";
        }, 5000);

    }

    cancelAddNewUser() {

        this.tglAddNewUser = false
        this.addNewUserForm.reset();

    }

    log(val: any) { console.log(val); }

}
