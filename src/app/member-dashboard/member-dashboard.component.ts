import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { MemberModal } from './member-dashboard.modal';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-member-dashboard',
  templateUrl: './member-dashboard.component.html',
  styleUrls: ['./member-dashboard.component.css']
})
export class MemberDashboardComponent implements OnInit {
  display = "none";
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  formValue !: FormGroup;
  memberModalObj: MemberModal = new MemberModal();
  memberData !: any;
  showAdd ! : boolean;
  showUpdate !: boolean;
  constructor(private formbuilber: FormBuilder, private api: ApiService) { }
  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: ['']
    })
    this.getAllMember();
  }
  clickAddMember(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postMemberDetails() {
    this.memberModalObj.firstName = this.formValue.value.firstName;
    this.memberModalObj.lastName = this.formValue.value.lastName;
    this.memberModalObj.email = this.formValue.value.email;
    this.memberModalObj.mobile = this.formValue.value.mobile;

    this.api.postMember(this.memberModalObj)
      .subscribe((res: any) => {
        console.log(res);
        alert('Member Added Sucessfully')
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllMember();
      },
        (err: any) => {
          alert('something want wrong')
        })
  }
  getAllMember() {
    this.api.getMember()
      .subscribe(res => {
        this.memberData = res;
      })
  }
  deleteMember(row: any) {
    this.api.deleteMember(row.id)
      .subscribe(res => {
        alert('Member Deleted')
        this.getAllMember();
      })
  }
  onEdit(row: any) {
    this.showAdd= false;
    this.showUpdate= true;
    this.memberModalObj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.firstName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
  }
  updateMemberDetails() {
    this.memberModalObj.firstName = this.formValue.value.firstName;
    this.memberModalObj.lastName = this.formValue.value.lastName;
    this.memberModalObj.email = this.formValue.value.email;
    this.memberModalObj.mobile = this.formValue.value.mobile;
    this.api.updateMember(this.memberModalObj, this.memberModalObj.id)
      .subscribe(res => {
        alert('Updated Sucessfully')
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllMember();
      })
  }
}

