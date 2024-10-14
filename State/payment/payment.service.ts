import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../Config/api";
import { Store } from "@ngrx/store";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, map, of } from "rxjs";
import { createPaymentFailure, createPaymentSuccess, updatePaymentFailure, updatePaymentSuccess } from "./payment.action";


@Injectable({
    providedIn: 'root',
})

export class PaymentService{
    API_BASE_URL=BASE_API_URL;
    // private headers;


    constructor(
        private store: Store,
        private http:HttpClient,
        private router: Router,
        private route:ActivatedRoute

    ) {
        // this.headers = new HttpHeaders({
        //     'Content-Type':'application/json',
        //     Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        // });
    }

    createPayment(orderId:any) {
        const url = `${this.API_BASE_URL}/api/payment/${orderId}`;
        const headers =new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type':'application/json',
        });

        return this.http
        .post(url,{},{headers})
        .pipe(
            map((data:any)=>{
                console.log("Payment Link Created",data)

                if(data.payment_link_url){
                    window.location.href=data.payment_link_url
                }


                return createPaymentSuccess({payload:data})
            }),
            catchError((error:any)=>{
                return of(createPaymentFailure(error.response && error.response.data.message? error.response.data.message:error.message))
            })
        )
        .subscribe((action)=> this.store.dispatch(action));

    }

    updatePayment(reqData:any) {
        const url = `${this.API_BASE_URL}/api/payment?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`;
         console.log("Update payment data")
        
        const headers =new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type':'application/json',
        });

        return this.http
        .get(url,{headers})
        .pipe(
            map((data:any)=>{
                console.log("Update Payment",data)

                if(data.payment_link_url){
                    window.location.href=data.payment_link_url
                }


                return updatePaymentSuccess({payload:data})
            }),
            catchError((error:any)=>{
                return of(updatePaymentFailure(error.response && error.response.data.message? error.response.data.message:error.message))
            })
        )
        .subscribe((action)=> this.store.dispatch(action));

    }

 






}