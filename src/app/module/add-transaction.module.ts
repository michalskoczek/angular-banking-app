import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionFormComponent } from '../form/transaction-form/transaction-form.component';

@NgModule({
  declarations: [TransactionFormComponent],
  exports: [TransactionFormComponent],
  imports: [ReactiveFormsModule],
})
export class AddTransactionModule {}
